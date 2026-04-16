import sys
import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
from mcp.server.fastmcp import FastMCP

# Create the MCP server
mcp = FastMCP("VK_Docs", dependencies=["mcp", "beautifulsoup4", "requests", "markdownify"])

@mcp.tool()
def fetch_vk_doc(url: str) -> str:
    """
    Fetches a documentation page from dev.vk.com and returns it as cleanly formatted Markdown.
    Provides the exact specification of API, SDK, or components. Allows the AI to instantly read VK docs.
    
    Args:
        url: The full URL to the dev.vk.com documentation page. Example: 'https://dev.vk.com/ru/vkmaps/routing/direction'
    """
    if not url.startswith('https://dev.vk.com/'):
        return "Error: URL must start with https://dev.vk.com/"
        
    try:
        # Fetch the page
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) VK_Docs_MCP/1.0'}
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Isolate the main content. Usually VK docs are in <article> or <main>
        content = soup.find('main') or soup.find('article') or soup.body
        
        if not content:
            return "Could not find main content on the page."
            
        # Convert HTML to clean Markdown. Strip out navigation, scripts, styles, header, footer.
        markdown_text = md(
            str(content), 
            heading_style="ATX", 
            strip=['script', 'style', 'nav', 'header', 'footer', 'aside']
        )
        
        result = f"# Document: {url}\n\n" + markdown_text.strip()
        return result
        
    except Exception as e:
        return f"Error fetching documentation: {str(e)}"

if __name__ == "__main__":
    # Initialize and run the MCP server on stdio transport
    mcp.run()

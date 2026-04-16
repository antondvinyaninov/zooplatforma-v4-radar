# Документация VK: https://dev.vk.com/ru/method/messages

# Messages

Методы для работы с личными сообщениями.

**Важно!** Методы `messages` можно вызвать с ключом доступа пользователя, полученным в Standalone-приложении через [`Implicit Flow`](/ru/api/access-token/implicit-flow-user) с правом доступа `messages`, если вы запрашивали его ранее. Для новых приложений это право не выдаётся.

Для моментального получения входящих сообщений используйте [LongPoll сервер](/ru/api/user-long-poll/getting-started).

Информация об ограничении Messages API находится в [Roadmap](/ru/reference/roadmap#%D0%9E%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20Messages%20API).

**Обратите внимание:** методы для работы со звонками перенесены в новую секцию [calls](/ru/method/calls). Старые методы звонков из секции messages были помечены устаревшими и могут быть удалены в будущих версиях API.

[addChatUser](/ru/method/messages.addChatUser)

Добавляет в мультидиалог нового пользователя.

[allowMessagesFromGroup](/ru/method/messages.allowMessagesFromGroup)

Позволяет разрешить отправку сообщений от сообщества текущему пользователю.

[createChat](/ru/method/messages.createChat)

Создаёт чат с несколькими участниками.

[delete](/ru/method/messages.delete)

Удаляет сообщение.

[deleteChatPhoto](/ru/method/messages.deleteChatPhoto)

Позволяет удалить фотографию мультидиалога.

[deleteConversation](/ru/method/messages.deleteConversation)

Удаляет беседу.

[deleteReaction](/ru/method/messages.deleteReaction)

Удаление ранее поставленной реакции

[denyMessagesFromGroup](/ru/method/messages.denyMessagesFromGroup)

Позволяет запретить отправку сообщений от сообщества текущему пользователю.

[edit](/ru/method/messages.edit)

Редактирует сообщение.

[editChat](/ru/method/messages.editChat)

Изменяет название беседы.

[forceCallFinish](/ru/method/messages.forceCallFinish)

Метод используется для принудительного завершения звонка

[getByConversationMessageId](/ru/method/messages.getByConversationMessageId)

Возвращает сообщения по conversation\_message\_id.

[getById](/ru/method/messages.getById)

Возвращает сообщения по их идентификаторам.

[getChat](/ru/method/messages.getChat)

Возвращает информацию о беседе.

[getChatPreview](/ru/method/messages.getChatPreview)

Получает данные для превью чата с приглашением по ссылке.

[getConversationMembers](/ru/method/messages.getConversationMembers)

Метод получает список участников беседы.

[getConversations](/ru/method/messages.getConversations)

Возвращает список бесед пользователя.

[getConversationsById](/ru/method/messages.getConversationsById)

Позволяет получить беседу по её идентификатору.

[getHistory](/ru/method/messages.getHistory)

Возвращает историю сообщений для указанного диалога.

[getHistoryAttachments](/ru/method/messages.getHistoryAttachments)

Возвращает материалы диалога или беседы.

[getImportantMessages](/ru/method/messages.getImportantMessages)

Возвращает список важных сообщений пользователя.

[getInviteLink](/ru/method/messages.getInviteLink)

Получает ссылку для приглашения пользователя в беседу.

[getLastActivity](/ru/method/messages.getLastActivity)

Метод получает текущий статус и дату последней активности пользователя.

[getLongPollHistory](/ru/method/messages.getLongPollHistory)

Возвращает обновления в личных сообщениях пользователя.

[getLongPollServer](/ru/method/messages.getLongPollServer)

Возвращает данные, необходимые для [подключения к Long Poll серверу](/ru/api/user-long-poll/getting-started).

[getMessagesReactions](/ru/method/messages.getMessagesReactions)

Получить актуальные счётчики реакций на сообщения

[getReactedPeers](/ru/method/messages.getReactedPeers)

Получить список пользователей и сообществ, которые поставили реакцию на сообщение

[getReactionsAssets](/ru/method/messages.getReactionsAssets)

Получение ассетов реакций

[isMessagesFromGroupAllowed](/ru/method/messages.isMessagesFromGroupAllowed)

Возвращает информацию о том, разрешена ли отправка сообщений от сообщества пользователю.

[joinChatByInviteLink](/ru/method/messages.joinChatByInviteLink)

Позволяет присоединиться к чату по ссылке-приглашению.

[markAsAnsweredConversation](/ru/method/messages.markAsAnsweredConversation)

Помечает беседу как отвеченную либо снимает отметку.

[markAsImportant](/ru/method/messages.markAsImportant)

Помечает сообщения как важные либо снимает отметку.

[markAsImportantConversation](/ru/method/messages.markAsImportantConversation)

Помечает беседу как важную либо снимает отметку.

[markAsRead](/ru/method/messages.markAsRead)

Метод помечает сообщения как прочитанные.

[markReactionsAsRead](/ru/method/messages.markReactionsAsRead)

Отмечает прочитанными все реакции на сообщениях с заданными cmids

[pin](/ru/method/messages.pin)

Закрепляет сообщение.

[removeChatUser](/ru/method/messages.removeChatUser)

Исключает из мультидиалога пользователя, если текущий пользователь или сообщество является администратором беседы либо текущий пользователь пригласил исключаемого пользователя.

[restore](/ru/method/messages.restore)

Восстанавливает удаленное сообщение.

[search](/ru/method/messages.search)

Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.

[searchConversations](/ru/method/messages.searchConversations)

Позволяет искать диалоги.

[send](/ru/method/messages.send)

Метод отправляет сообщение.

[sendMessageEventAnswer](/ru/method/messages.sendMessageEventAnswer)

Отправляет событие с действием, которое произойдет при нажатии на callback-кнопку.

[sendReaction](/ru/method/messages.sendReaction)

Метод установки реакции на сообщение

[setActivity](/ru/method/messages.setActivity)

Изменяет статус набора текста пользователем в диалоге.

[setChatPhoto](/ru/method/messages.setChatPhoto)

Метод сохраняет обложку беседы после её успешной [загрузки на сервер](/ru/api/upload/main-photo-in-chat).

[startCall](/ru/method/messages.startCall)

Старт нового звонка от имени пользователя или от сообщества

[unpin](/ru/method/messages.unpin)

Открепляет сообщение.
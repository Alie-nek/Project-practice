# Командная строка на Node.js для выполнения различных команд #
Этот проект представляет собой реализацию скелета командной строки (CLI), позволяющую пользователям выполнять различные команды через текстовый интерфейс. CLI создана с использованием Node.js и современных стандартов JavaScript (ES6), что обеспечивает высокую производительность и легкость в использовании.

## Возможности
* **Запуск команды:** CLI поддерживает команду --start, что позволяет запускать приложение и при введении неполной команды выводит список доступных команд.
* **Конфигурация:** Возможность загружать конфигурацию из файла и проверять ее соответствие заданной схеме JSON.
* **Логирование:** Использование библиотеки для логирования, что позволяет отслеживать события, предупреждения и ошибки.
* **Управление ошибками:** Обработка ошибок конфигурации с информативными сообщениями для пользователей.
  
## Требования
* Node.js версии 12 и выше.
* Базовые знания JavaScript и Node.js.
* Среда разработки, такая как Visual Studio 2022 или любая другая, поддерживающая Node.js.

## Установка
* Скачайте файлы технологии и перенесите их в свою среду разработки.
* Создайте проект в Visual Studio 2022, выбрав шаблон Node.js Console Application.
* Откройте PowerShell и установите необходимые библиотеки с помощью команды:
```npm install chalk arg ajv cosmiconfig debug```
* Свяжите проект с тестовым проектом с помощью ```npm link```.

Подробнее в [техническом руководстве](https://github.com/Alie-nek/Project-practice/blob/master/docs/Вариативное%20задание.md#командная-строка-cli-на-javascript). 
## Использование
Запустите CLI из директории testProject с помощью команды:

```tool --start```

Это запустит приложение и выведет сообщение "Starting the app". 

Данный проект является скелетом CLI, по необходимости вы можете добавить свои функции.

## Архитектура
Архитектура CLI состоит из нескольких компонентов:

* **Основной исполняемый файл (index.js):** Обрабатывает аргументы командной строки, загружает конфигурацию и запускает соответствующие команды.
* **Логгер (logger.js):** Создает логгеры для отслеживания событий, предупреждений и ошибок.
* **Команды (commands/start.js):** Определяет логику запуска приложения.
* **Менеджер конфигурации (config/config-mgr.js):** Загружает и проверяет конфигурацию на соответствие JSON-схеме.
* **Схема конфигурации (config/schema.json):** Описывает структуру и типы данных допустимой конфигурации.

## Поддерживаемые команды и возможно выводимые ошибки
CLI поддерживает только одну команду:
* --start: Запускает приложение с заданной конфигурацией.

CLI может выводить такие ошибки:
* ```Could not find configuration, using default```: CLI не может найти файл конфигурации в текущем рабочем каталоге, поэтому будет использовать порт по умолчанию.
* ```Invalid configuration was supplied```: файл конфигурации найден, но его содержимое не соответствует ожидаемой структуре или типам данных, описанным в JSON-схеме.

 **Пример использования и вывода ошибок:**
![Снимок экрана (995)](https://github.com/user-attachments/assets/e1bd55f6-5154-47c7-8c9d-e8bb100838fb)

![Снимок экрана (1001)](https://github.com/user-attachments/assets/e8d933ce-60e2-4e74-84ff-ee50970e7c22)


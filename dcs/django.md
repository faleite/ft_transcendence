## Django

> [To be continued...](https://plataforma.dev.pro.br/31937-03-django/695748-backup-do-postgresql)\
> [Course Django](https://plataforma.dev.pro.br/31937-03-django)\
> [Course PYTOOLS](https://plataforma.dev.pro.br/31287-02-pytools)

### Gestão de dependências
- [Flake8](https://plataforma.dev.pro.br/31287-02-pytools/695684-flake8)
- [Cobetura de Testes no GitHub Actions](https://plataforma.dev.pro.br/188863-django-para-profissionais/4132045-cobertura-de-testes-em-projeto-django-no-github-actions)
### Tools
- Update dependences [safetycli](https://safetycli.com/)
- [Pytest Django](https://plataforma.dev.pro.br/31937-03-django/695729-pytest-django)
- Cobertura de tests com [pytest-cov](https://pypi.org/project/pytest-cov/) e [codecov](https://codecov.io/)


### Changes in project
- [requirements.txt](../src/project/docker/srcs/requirements/backend/tools/requirements.txt)
- [Makefile](../src/project/docker/Makefile)

### Tasks
- [seetings.py](../src/project/docker/srcs/requirements/backend/conf/backend/settings.py)
  - [ ] fix DEBUG variable 
  - [ ] fix SECRET_KEY variable
  - [ ] fix ALLOWED_HOSTS variable
- Update `.gitignore` file
- Tirar duvidas de como esta funcionando o `Banco de Dados` no projeto
- [ ] Veiriicar  `TIME_ZONE` no `settings.py`
- [ ] Duvidas sobre static files e media files no `settings.py`
- [ ] Entender o funcionamento da classe `User` no [`models.py`](../src/project/docker/srcs/requirements/backend/conf/users/models.py)
- [ ] Gerenciamento de usuarios: Quando Usar `BaseUserManager` e `UserManager`
  - **Modelo de Usuário Personalizado:** Se você estiver criando um modelo de usuário personalizado, você deve criar uma classe de gerenciador de usuários personalizada estendendo `BaseUserManager`. Isso permite que você defina como os usuários e superusuários devem ser criados.
  - **Modelo de Usuário Padrão:** Se você estiver usando o modelo de usuário padrão do Django, não precisa se preocupar com `BaseUserManager` ou `UserManager`, pois o Django já fornece uma implementação padrão.
- [ ] Como esta a migracao para o `PostgreSQL`?

### Commands Django
- `python3 manage.py`

### Campos para o `models.py`
```shell
admin
 [X] 0001_initial
 [X] 0002_logentry_remove_auto_add
 [X] 0003_logentry_add_action_flag_choices
auth
 [X] 0001_initial
 [X] 0002_alter_permission_name_max_length
 [X] 0003_alter_user_email_max_length
 [X] 0004_alter_user_username_opts
 [X] 0005_alter_user_last_login_null
 [X] 0006_require_contenttypes_0002
 [X] 0007_alter_validators_add_error_messages
 [X] 0008_alter_user_username_max_length
 [X] 0009_alter_user_last_name_max_length
 [X] 0010_alter_group_name_max_length
 [X] 0011_update_proxy_permissions
 [X] 0012_alter_user_first_name_max_length
authtoken
 [X] 0001_initial
 [X] 0002_auto_20160226_1747
 [X] 0003_tokenproxy
 [X] 0004_alter_tokenproxy_options
contenttypes
 [X] 0001_initial
 [X] 0002_remove_content_type_name
games
 (no migrations)
sessions
 [X] 0001_initial
users
 [X] 0001_initial
```
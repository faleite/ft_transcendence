## Django


> [To be continued...](https://plataforma.dev.pro.br/31937-03-django/695748-backup-do-postgresql)\
> [Course Django](https://plataforma.dev.pro.br/31937-03-django) | 
> [Course PYTOOLS](https://plataforma.dev.pro.br/31287-02-pytools)

### Gestão de dependências
- [Flake8](https://plataforma.dev.pro.br/31287-02-pytools/695684-flake8)
- [Black]
- [Cobetura de Testes no GitHub Actions](https://plataforma.dev.pro.br/188863-django-para-profissionais/4132045-cobertura-de-testes-em-projeto-django-no-github-actions)
- Update dependences [safetycli](https://safetycli.com/)
- [Pytest Django](https://plataforma.dev.pro.br/31937-03-django/695729-pytest-django)
- Cobertura de tests com [pytest-cov](https://pypi.org/project/pytest-cov/) e [codecov](https://codecov.io/)
- [Django Debug Toolbar](https://django-debug-toolbar.readthedocs.io/en/latest/)
- [Sentry](https://sentry.io/welcome/) para monitoramento de erros

### Changes in project
- [requirements.txt](../src/project/docker/srcs/requirements/backend/tools/requirements.txt)
- [Makefile](../src/project/docker/Makefile)

### Tasks
- [seetings.py](../src/project/docker/srcs/requirements/backend/conf/backend/settings.py)
  - [ ] fix DEBUG variable 
  - [ ] fix SECRET_KEY variable
  - [ ] fix ALLOWED_HOSTS variable
  - [ ] Criar um env-sample
- Update `.gitignore` file
- Tirar duvidas de como esta funcionando o `Banco de Dados` no projeto
- [ ] Veiriicar  `TIME_ZONE` no `settings.py`
- [ ] Duvidas sobre static files e media files no `settings.py`
- [ ] Entender o funcionamento da classe `User` no [`models.py`](../src/project/docker/srcs/requirements/backend/conf/users/models.py)
- [ ] Gerenciamento de usuarios: Quando Usar `BaseUserManager` e `UserManager`
  - **Modelo de Usuário Personalizado:** Se você estiver criando um modelo de usuário personalizado, você deve criar uma classe de gerenciador de usuários personalizada estendendo `BaseUserManager`. Isso permite que você defina como os usuários e superusuários devem ser criados.
  - **Modelo de Usuário Padrão:** Se você estiver usando o modelo de usuário padrão do Django, não precisa se preocupar com `BaseUserManager` ou `UserManager`, pois o Django já fornece uma implementação padrão.
- [ ] Como esta a migracao para o `PostgreSQL`?
- [ ] Adequar links e comments da versão Django que esta sendo utilizada

### Commands Django
- `python3 manage.py`
·
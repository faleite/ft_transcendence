## Tasks

(...)

### [ Issue 4 ] Fix API and admin pages
- Alterar aquivo `docker/srcs/requirements/backend/conf/backend/urls.py` para:
```python
urlpatterns = []

if settings.DEBUG:
    urlpatterns += [
        path('admin/', admin.site.urls),
        path("api/users/", include("users.urls")),
        path("api/auth/", include("auth.urls")),
    ]
```

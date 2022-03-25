using Microsoft.AspNetCore.Authentication.OAuth.Claims;

namespace CollegeWebsite.Core.IServices;

public interface IBaseService<T>
    where T : class
{
    void Delete(T entity);

    T Insert(T entity);

    T Update(T entity);
}
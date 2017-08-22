namespace MultiTenantDemo.Infra
{
    public interface ITenant
    {
        string Alias { get; }
        string UrlDatabase { get; }
    }
}

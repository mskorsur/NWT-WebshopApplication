using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NWT_Webshop_Application.Startup))]
namespace NWT_Webshop_Application
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

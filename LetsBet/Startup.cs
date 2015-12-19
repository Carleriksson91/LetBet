using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LetsBet.Startup))]
namespace LetsBet
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

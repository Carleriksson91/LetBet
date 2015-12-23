using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using LetsBet.Models;

namespace LetsBet.Controllers
{
   public class StatsController : Controller
    {

       public ActionResult Index(List<string> leagueNames )
       {
           var model = new StatsViewModel(leagueNames);
           return View(model);
       }

        [HttpPost]
       public JsonResult LeagueLoader(List<string>  leagues)
       {
           return
       }
    }
}

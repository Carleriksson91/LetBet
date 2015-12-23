using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LetsBet.Mappers;

namespace LetsBet.Models
{
    public class StatsViewModel
    {
        public StatsViewModel(List<string> leagueNames)
        {
            Leagues = leagueNames.Select(x => x.MapToLeague()).ToList();
        }
        public List<League> Leagues { get; set; }

    }
}

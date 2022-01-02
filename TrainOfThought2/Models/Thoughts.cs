using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainOfThought.Models
{
    public class Thoughts
    {
        public Guid Id { get; set; }
        public string ConnectedWord { get; set; }
        public string SavedWord { get; set; }
        public Guid UserId { get; set; }
    }
}
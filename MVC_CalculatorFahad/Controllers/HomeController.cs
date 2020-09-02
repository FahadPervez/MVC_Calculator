using MVC_CalculatorFahad.Models;
using MVC_CalculatorFahad.Service;
using System.Web.Mvc;

namespace MVC_CalculatorFahad.Controllers
{
    /// <summary>
    /// Calculator 
    /// </summary>
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Calculator calculatorModel = new Calculator();
            return View(calculatorModel);
        }

        [HttpPost]
        public ActionResult Index(Calculator calculatorModel)
        {
            CalculatorService calService = new CalculatorService();
            calculatorModel = calService.Calculate(calculatorModel);
            return View(calculatorModel);
        }
    }
}
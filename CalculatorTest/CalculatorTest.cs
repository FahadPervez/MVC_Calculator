using Microsoft.VisualStudio.TestTools.UnitTesting;
using MVC_CalculatorFahad.Models;
using MVC_CalculatorFahad.Service;
using System;

namespace CalculatorTest
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void CalculatorTestMultiply()
        {
            CalculatorService calService = new CalculatorService();

            Calculator calculatorModel = new Calculator
            {
                TextValue = "5*5"
            };

            calculatorModel = calService.Calculate(calculatorModel);

            long result = Convert.ToInt64(calculatorModel.Result.Split('=')[1].Trim());

            Assert.AreEqual(result,25);
        }

        [TestMethod]
        public void CalculatorTestPlus()
        {
            CalculatorService calService = new CalculatorService();

            Calculator calculatorModel = new Calculator
            {
                TextValue = "10+5"
            };

            calculatorModel = calService.Calculate(calculatorModel);

            long result = Convert.ToInt64(calculatorModel.Result.Split('=')[1].Trim());

            Assert.AreEqual(result, 15);
        }
    }
}

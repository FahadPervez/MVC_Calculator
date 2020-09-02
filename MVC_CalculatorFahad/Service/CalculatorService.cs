using MVC_CalculatorFahad.Models;
using System;
using System.Collections.Generic;

namespace MVC_CalculatorFahad.Service
{
    public class CalculatorService
    {
        List<string> validNumericOperations = new List<string>
            {
                "+", "-", "*", "/"
            };

        public Calculator Calculate(Calculator calculatorModel)
        {
            try
            {
                if (!string.IsNullOrEmpty(calculatorModel.TextValue))
                {
                    if (validNumericOperations.Contains(calculatorModel.TextValue[0].ToString()) ||
                       validNumericOperations.Contains(calculatorModel.TextValue.Substring(calculatorModel.TextValue.Length - 1)))
                    {
                        calculatorModel.Result = string.Empty;
                    }
                    else
                    {
                        calculatorModel.Result = string.Format("{0} = {1} ", calculatorModel.TextValue, GetResult(calculatorModel.TextValue));
                    }
                }

                else
                {
                    calculatorModel.Result = string.Empty;
                }
            }
            catch (Exception ex)
            {
                calculatorModel.Error = "Error while calculation .. ! " + ex.Message;
            }

            return calculatorModel;

        }

        private string GetResult(string str)
        {
            List<char> symbleList = new List<char>();
            char[] charSymble = { '+', '-', '*', '/' };
            string[] st = str.Split(charSymble);
            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
                {
                    symbleList.Add(str[i]);
                }
            }
            double result = Convert.ToDouble(st[0]);
            for (int i = 1; i < st.Length; i++)
            {
                double num = Convert.ToDouble(st[i]);
                int j = i - 1;
                switch (symbleList[j])
                {
                    case '+':
                        result = result + num;
                        break;
                    case '-':
                        result = result - num;
                        break;
                    case '*':
                        result = result * num;
                        break;
                    case '/':
                        result = result / num;
                        break;
                    default:
                        result = 0.0;
                        break;
                }
            }
            return result.ToString();
        }
    }
}

import { formatter } from "../../util/investment.js";

export default function ({ annualData }) {
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  let Table = annualData.map((innerobject) => {
    const totalInterest =
      innerobject.valueEndOfYear -
      innerobject.annualInvestment * innerobject.year -
      initialInvestment;
    const totalAmountInvested = innerobject.valueEndOfYear - totalInterest;
    return (
      <tr key={innerobject.year}>
        <td>{innerobject.year}</td>
        <td>{formatter.format(innerobject.valueEndOfYear)}</td>
        <td>{formatter.format(innerobject.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest </th>
          <th>Interest capital</th>
        </tr>
      </thead>
      <tbody>{Table}</tbody>
    </table>
  );
}

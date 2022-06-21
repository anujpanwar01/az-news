import {
  CovidHistoryData,
  CountryName,
  CountryPopulation,
  CovidAllCases,
} from "./Covid-History.styles";

const CovidHistory = (props) => {
  const { data } = props;

  return (
    <CovidHistoryData>
      <CountryName>
        <img src={data?.flag} alt={data?.Country} />
        <h1>{data?.Country || "Country"}</h1>
      </CountryName>
      <CountryPopulation>
        <h4>Population</h4>
        <p>{data?.population.toLocaleString(props.lang) || 0}</p>
      </CountryPopulation>
      <CovidAllCases>
        <div>
          <h4>Total cases</h4>
          <p>{data?.TotalConfirmed.toLocaleString(props.lang) || 0}</p>
        </div>
        <div className="total-death">
          <h4>Total deaths</h4>
          <p>{data?.TotalDeaths.toLocaleString(props.lang) || 0}</p>
        </div>
      </CovidAllCases>
    </CovidHistoryData>
  );
};
export default CovidHistory;

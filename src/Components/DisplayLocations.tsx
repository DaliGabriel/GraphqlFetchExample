import { gql, useQuery } from "@apollo/client";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const DisplayLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h1 className="main-title">Hello</h1>

      {data.locations.map((e: any) => (
        <div key={e.id}>
          <div className="card">
            <div className="bottom-section">
              <span className="title">{e.name}</span>
              <img src={e.photo} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayLocations;

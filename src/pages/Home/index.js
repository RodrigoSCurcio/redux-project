import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MdFlightTakeoff } from "react-icons/md";

import api from "../../services/api";
import "./style.css";
import { addReserveRequest } from "../../store/modules/reserve/actions";

export default function Home({ history }) {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('trips');
      setTrips(response.data);
    })();
  }, [])

  function handleAdd(id) {
    dispatch(addReserveRequest(id));
    history.push("/reservas");
  }

  return (
    <div>
      <div className="box">
        {trips.map((trip) => {
          return (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>

              <button
                type="button"
                onClick={() => handleAdd(trip.id)}
              >
                <div>
                  <MdFlightTakeoff size={16} color="#fff" />
                </div>
                <span>SOLICITAR RESERVA</span>
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

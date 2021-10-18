import * as React from "react";

import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const Affirmations = () => {
  const [affirmations, setAffirmations] = React.useState([]);
  const { loading, apiClient } = useApi();

  // function that loads Affirmations
  const loadAffirmations = React.useCallback(
    async () => setAffirmations(await apiClient.getAffirmations()),
    [apiClient],
  );
  const addAffirmation = (affirmation) =>
    apiClient.addTask(affirmation).then(loadAffirmations);

  React.useEffect(() => {
    !loading && loadAffirmations();
  }, [loading, loadAffirmations]);

  return loading ? null : (
    <section>
      <AffirmationList {...{ affirmations }} />
      <AddAffirmation {...{ addAffirmation }} />
    </section>
  );
};

// component that holds Affirmations List
const AffirmationList = ({ affirmations }) => (
  <ul className={styles.list}>
    {affirmations.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

const AddAffirmation = ({ addAffirmation }) => {
  const [affirmation, setAffirmation] = React.useState("");

  const canAdd = affirmation !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addAffirmation(affirmation);
      setAffirmation("");
    }
  };

  return (
    <form {...{ onSubmit }}>
      <label>
        New affirmation:{" "}
        <input
          onChange={(e) => setAffirmation(e.currentTarget.value)}
          value={affirmation}
        />
      </label>
      <button disabled={!canAdd} className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default Affirmations;

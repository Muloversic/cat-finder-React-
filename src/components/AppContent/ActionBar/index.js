import Select from 'react-select';
import './index.scss';
const ActionBar = ({ contentType }) => {
  const optionsBreeds = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const optionsLimit = [
    { value: '5', label: 'Limit: 5' },
    { value: '10', label: 'Limit: 10' },
    { value: '15', label: 'Limit: 15' },
    { value: '20', label: 'Limit: 20' },
  ];

  return (
    <div className="actionbar">
      <button className="actionbar-btn-prev icon-arrow-left"></button>
      <h2 className="actionbar-heading">{contentType}</h2>
      <Select
        options={optionsBreeds}
        classNamePrefix="custom-select"
        defaultValue={optionsBreeds[1]}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#fbe0dc',
            primary: '#ff868e',
          },
        })}
      />
      <Select
        options={optionsLimit}
        classNamePrefix="custom-select--short custom-select"
        defaultValue={optionsLimit[1]}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary25: '#fbe0dc',
            primary: '#ff868e',
          },
        })}
      />
      <span className="actionbar-sort actionbar-sort--az"></span>
      <span className="actionbar-sort actionbar-sort--za"></span>
    </div>
  );
};
export default ActionBar;

import Select from 'react-select';
import './index.scss';
const ActionBar = ({ currentPageName, allBreeds, handleBreeds, handleLimit, handleImageOrder }) => {
  const optionsBreeds = [{ value: '', label: 'All breeds' }];

  //   allBreeds.forEach((catInfo) => {
  //     optionsBreeds.push({ value: catInfo.id, label: catInfo.name });
  //   });

  const optionsLimit = [
    { value: 5, label: 'Limit: 5' },
    { value: 10, label: 'Limit: 10' },
    { value: 15, label: 'Limit: 15' },
    { value: 20, label: 'Limit: 20' },
  ];

  return (
    <div className="actionbar">
      <div className="actionbar-row">
        <button className="actionbar-btn-prev icon-arrow-left"></button>
        <h2 className="actionbar-heading">{currentPageName}</h2>
        <button className="actionbar-btn-prev icon-upload"></button>
      </div>

      <div className="actionbar-select-block">
        <div className="actionbar-row">
          <Select
            options={optionsBreeds}
            classNamePrefix="custom-select"
            defaultValue={optionsBreeds[0]}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#fbe0dc',
                primary: '#ff868e',
              },
            })}
            onChange={handleBreeds}
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
            onChange={handleLimit}
          />
        </div>
        <div className="actionbar-row">
          <Select
            options={optionsBreeds}
            classNamePrefix="custom-select"
            defaultValue={optionsBreeds[0]}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#fbe0dc',
                primary: '#ff868e',
              },
            })}
            onChange={handleBreeds}
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
            onChange={handleLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionBar;

import Select from 'react-select';
import './index.scss';
const ActionBar = ({ currentPageName, allBreeds, handleBreeds, handleLimit, handleOrder, handleType }) => {
  const optionsBreeds = [{ value: '', label: 'All breeds' }];
  allBreeds.forEach((catInfo) => {
    optionsBreeds.push({ value: catInfo.id, label: catInfo.name });
  });

  const optionsLimit = [
    { value: 5, label: 'Limit: 5' },
    { value: 10, label: 'Limit: 10' },
    { value: 15, label: 'Limit: 15' },
    { value: 20, label: 'Limit: 20' },
  ];

  const optionsOrder = [
    { value: 'random', label: 'Random' },
    { value: 'Desc', label: 'Desc' },
    { value: 'Asc', label: 'Asc' },
  ];

  const optionsType = [
    { value: 'All', label: 'All' },
    { value: 'Static', label: 'Static' },
    { value: 'Animated', label: 'Animated' },
  ];

  return (
    <div className="actionbar actionbar-gallery">
      <div className="actionbar-row">
        <div className="actionbar-name">
          <button className="actionbar-btn-prev  icon-arrow-left"></button>
          <h2 className="actionbar-heading">{currentPageName}</h2>
        </div>
        <button className="actionbar-btn-upload icon-upload">UPLOAD</button>
      </div>

      <div className="actionbar-select-block">
        <div className="actionbar-row">
          <div className="actionbar-select-wrapper">
            <h4 className="select-title">ORDER</h4>
            <Select
              options={optionsOrder}
              classNamePrefix="custom-select"
              defaultValue={optionsOrder[0]}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#fbe0dc',
                  primary: '#ff868e',
                },
              })}
              onChange={handleOrder}
            />
          </div>
          <div className="actionbar-select-wrapper">
            <h4 className="select-title">TYPE</h4>
            <Select
              options={optionsType}
              classNamePrefix="custom-select"
              defaultValue={optionsType[1]}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#fbe0dc',
                  primary: '#ff868e',
                },
              })}
              onChange={handleType}
            />
          </div>
        </div>
        <div className="actionbar-row">
          <div className="actionbar-select-wrapper actionbar-select-wrapper--auto">
            <h4 className="select-title">BREED</h4>
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
          </div>
          <div className="actionbar-select-wrapper actionbar-select-wrapper--auto">
            <div className="select-wrapper">
              <h4 className="select-title">LIMIT</h4>
              <Select
                options={optionsLimit}
                classNamePrefix="custom-select--short custom-select"
                defaultValue={optionsLimit[0]}
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
            <span className="actionbar-reset icon-update"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;

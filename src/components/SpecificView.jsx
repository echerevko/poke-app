import SideView from './SideView';

const SpecificView = ({ moreData }) => {
  return (
    <div className='search-result'>
      <SideView moreData={moreData} />
    </div>
  );
};

export default SpecificView;

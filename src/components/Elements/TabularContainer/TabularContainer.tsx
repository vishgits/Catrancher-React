
interface TabularContainerProps {
  isValidCat: boolean;
  cats:any;
  count:number;
}

const TabularContainer = ({isValidCat, cats,count}:TabularContainerProps) => {
  return (
    <div className="p-2 border h-20 w-20">
      {isValidCat && <img src={`https://static.quantcast.com/catrancher/${cats[count]}.png`} alt="cat Image" className="h-16 w-20"></img> }
    </div>
  );
};

export default TabularContainer;

import { useEffect } from "react";
import ImageCheckBox from "../Elements/ImageCheckBox/ImageCheckBox";
import { makeAxiosRequest } from "../../services/makeRequest";
import { useSystem } from "../../contexts/SystemContext/useSystem";
import TabularContainer from "../Elements/TabularContainer/TabularContainer";

export default function Catrancher() {
  const {
    setCatValue,
    catValue,
    selectedCats,
    setSelectedCats,
    setshowModal,
    setvalidClowders,
    validClowders,
  } = useSystem();
  useEffect(() => {
    makeAxiosRequest(setCatValue);
  }, []);

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    const newSelectedCats: string[] | null = [...selectedCats];
    if (isChecked(newValue)) {
      const index = newSelectedCats.indexOf(newValue);
      if (index !== -1) {
        newSelectedCats.splice(index, 1);
      }
    } else {
      newSelectedCats.push(newValue);
    }
    setSelectedCats(newSelectedCats);
    if (newSelectedCats.length === 3) {
      if (validateClowder(newSelectedCats)) {
        setvalidClowders([...validClowders, ...newSelectedCats]);
      }
      setshowModal(true);
    }
  };

  const validateClowder = (clowder: string[]) => {
   
    const validateCategory = validateStripes(clowder);
    return validateCategory && validateShape(clowder);
    
  };

  const validateShape = (clowder: string[]) => {
    const thirdChar = clowder[0].charAt(2);
    const sameShape = clowder.filter(
      (cat: string) => cat.charAt(2) === thirdChar
    );
    if (sameShape.length === 3 || sameShape.length === 0 ) return true;
    if (sameShape.length > 1 ) {
      const tall = clowder.filter((cat: string) => cat.charAt(2) === 't');
      const short = clowder.filter((cat: string) => cat.charAt(2) === 's');
      return tall.length > 0 && tall.length > short.length ? false:true
    }
    
  };

  const validateStripes = (clowder: string[]) => {
    const firstChar = selectedCats[0].charAt(0);
    const sameStripes = clowder.filter(
      (cat: string) => cat.charAt(0) === firstChar
    );
    console.log(sameStripes.length)
    return sameStripes.length === 3 ||  sameStripes.length === 1;
  };
  const isChecked = (val: string) => {
    return selectedCats.includes(val);
  };
  const isDisabled = (val: string) => {
    return validClowders.includes(val);
  };

  return (
    <div className="flex flex-wrap m-8">
      <ul className="mr-4 grid gap-6 md:grid-cols-3 w-full md:w-full lg:w-7/12">
        {catValue?.map((val: any, index: number) => (
          <ImageCheckBox
            src={`https://static.quantcast.com/catrancher/${val.join("")}.png`}
            onSelectionChange={handleSelectionChange}
            key={index}
            id={val.join("")}
            value={val.join("")}
            name={val.join("")}
            count={index}
            checked={isChecked(val.join(""))}
            disable={isDisabled(val.join(""))}
          ></ImageCheckBox>
        ))}
      </ul>
      <div className="w-full lg:w-4/12 md:w-full lg:flex-initial">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-3">
            {[...Array(12)].map((_,index:number) => (
              <TabularContainer key={index} cats={validClowders}  isValidCat={validClowders[index]} count={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

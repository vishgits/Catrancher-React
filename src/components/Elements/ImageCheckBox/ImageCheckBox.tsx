import { ReactEventHandler} from "react";
interface ImageCheckBoxProps {
  onSelectionChange: ReactEventHandler<HTMLInputElement>;
  checked?: boolean | undefined;
  id: string;
  value: string;
  name: string;
  src: string;
  count: number;
  disable?:boolean
}

const ImageCheckBox = ({
  src,
  onSelectionChange,
  checked,
  id,
  value,
  name,
  disable
}: ImageCheckBoxProps) => {
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        className="hidden peer"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onSelectionChange(event)
        }
        value={value}
        name={name}
        checked={checked}
        disabled={disable}
      />
      <label
        htmlFor={id}
        className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ${disable && 'pointer-events-none bg-gray-100'}`}
      >
        <div className="block h-24 w-full">
          <img className="h-full m-auto" src={src}></img>
        </div>
      </label>
    </li>
  );
};

export default ImageCheckBox;

export interface ImageUploadProps {
  images: {
    image: File;
    url: string;
  }[];
  inputRef: {
    current: HTMLInputElement | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleDelete: (clickedImage: File) => void;
}

export interface FlyerFormProps {
  controller: {
    handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeMainText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleTag: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleDeleteTag: (tag: string) => void;
    handleContact: (e: React.ChangeEvent<HTMLFormElement>) => void;
    handleSubmit: () => void;
    handleAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    checkAll: () => boolean;
    isChatOn: boolean;
    isEmailOn: boolean;
    suggestTags: string;
    tagList: string[];
    tag: string;
    image: ImageUploadProps;
    title: string;
    mainText: string;
    contact: string[];
    address: { chatting: string; email: string };
  };
  mobile: {
    backPage: () => void;
    handleChangeRadio: (e: React.ChangeEvent<HTMLFormElement>) => void;
    category: string | undefined;
  };
}

export interface SelectCategoryProps {
  controller: {
    backPage: () => void;
    handleChangeRadio: (e: React.ChangeEvent<HTMLFormElement>) => void;
    category: string | undefined;
  };
}

export interface FlyerRegisterProps {
  imageFile: File;
  imageFileSecond: File;
  postRequestDto: {
    categoryKeyword: string;
    contactWay: string;
    email?: string;
    kakaoUrl?: string;
    tags: string;
    title: string;
    content: string;
  };
}

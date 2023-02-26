import styled from '@emotion/styled';
import { Fragment } from 'react';

import { COLORS } from '../../constants/colors';
import { contacts } from '../../constants/contacts';
import { FlyerFormProps } from '../../interfaces/flyerForm';
import Categorys from './Categorys';
import ImageUpload from './ImageUpload';

const FlyerForm = ({ controller, mobile }: FlyerFormProps) => {
  const {
    handleChangeTitle,
    handleChangeMainText,
    handleTag,
    handleKeyDown,
    handleDeleteTag,
    handleContact,
    handleSubmit,
    handleAddress,
    handleSave,
    image,
    isChatOn,
    isEmailOn,
    suggestTags,
    tagList,
    tag,
    title,
    mainText,
    contact,
    address,
  } = controller;

  const { backPage, handleChangeRadio, category } = mobile;

  return (
    <Container>
      <BackArrow onClick={backPage} />
      <TitleNButtons>
        <FormTitle>전단지 만들기</FormTitle>
        <ButtonContainer>
          <SaveBtn onClick={handleSave}>임시 저장</SaveBtn>
          <PostBtn onClick={handleSubmit}>전단지 붙이기</PostBtn>
        </ButtonContainer>
      </TitleNButtons>
      <CategoryContainer>
        <FormTitle id='category'>카테고리 설정</FormTitle>
        <Categorys handleChangeRadio={handleChangeRadio} category={category} />
      </CategoryContainer>
      <SetTitle
        type='text'
        placeholder='제목 (7자 이상 35자 이내 작성)'
        name='title'
        value={title}
        onChange={handleChangeTitle}
        maxLength={35}
      />

      <ImageContainer>
        <ImageUpload image={image} />
      </ImageContainer>

      <SetTextArea
        placeholder='본문을 최대 1000자 이내로 작성해주세요.'
        name='content'
        value={mainText}
        onChange={handleChangeMainText}
        maxLength={1000}
      />

      <TagSetting>
        <div style={{ fontWeight: '400' }}>
          태그 설정
          <SubExplain>최대 3개</SubExplain>
        </div>
        <Suggestion>
          이런 태그는 어때요?
          <br />
          {suggestTags}
        </Suggestion>

        <TagLabel>
          <InputTags
            type='text'
            placeholder='태그입력 (엔터)'
            value={tag}
            onChange={handleTag}
            onKeyDown={handleKeyDown}
          />
        </TagLabel>

        <TagContainer>
          {tagList.map((tag) => {
            return (
              <PushedTag key={tag}>
                #{tag}
                <DeleteTagBtn onClick={() => handleDeleteTag(tag)} />
              </PushedTag>
            );
          })}
        </TagContainer>
      </TagSetting>

      <div style={{ margin: '30px 0px' }}>
        <form onChange={handleContact}>
          <div style={{ fontWeight: '400', marginBottom: '25px' }}>
            연락 수단 설정<SubExplain>중복 선택 가능</SubExplain>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {contacts.map(({ id, name }) => (
              <Fragment key={id}>
                <ContactInput
                  id={id}
                  type='checkbox'
                  name='contact'
                  value={id}
                  checked={contact.includes(id)}
                  readOnly
                />
                <ContactLabel htmlFor={id}>{name}</ContactLabel>
              </Fragment>
            ))}
          </div>
          {isChatOn && (
            <AddressContainer>
              오픈채팅 주소 입력
              <AddressInput
                placeholder='https://open.kakao.com/...'
                name='chatting'
                value={address.chatting}
                onChange={handleAddress}
              />
            </AddressContainer>
          )}
          {isEmailOn && (
            <AddressContainer>
              이메일 주소 입력
              <AddressInput
                placeholder='example@example.com'
                name='email'
                value={address.email}
                onChange={handleAddress}
              />
            </AddressContainer>
          )}
        </form>
      </div>
      <ButtonContainer id='mobile'>
        <SaveBtn onClick={handleSave}>임시 저장</SaveBtn>
        <PostBtn onClick={handleSubmit}>전단지 붙이기</PostBtn>
      </ButtonContainer>
    </Container>
  );
};

export default FlyerForm;

const Container = styled.div`
  padding: 50px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const TitleNButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  border-bottom: 1px solid #d9d9d9;
  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

const FormTitle = styled.div`
  font-size: 23px;
  font-weight: 600;
  &#category {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &#mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 40px;
    }
  }
`;

const BackArrow = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    background: url('/img/back.png') no-repeat center center;
    background-size: contain;
    cursor: pointer;
    margin-bottom: 40px;
  }
`;

const SaveBtn = styled.button`
  border: 1px solid ${COLORS.MAIN};
  background: #fff;
  color: #000;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 25%;
  }
`;

const PostBtn = styled.button`
  border: none;
  background: ${COLORS.MAIN};
  color: #fff;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 6px;
  margin-left: 15px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 10px;
    margin-left: 0;
    width: 70%;
  }
`;

const SetTitle = styled.input`
  display: block;
  border: none;
  outline: none;
  padding: 50px 0;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  &::placeholder {
    color: #adadad;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 0;
    font-size: 16px;
  }
`;
const SetTextArea = styled.textarea`
  border: none;
  outline: none;
  padding: 30px 0;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  word-wrap: break-word;
  height: 300px;
  resize: none;
  line-height: 1.8;
  &::placeholder {
    color: #adadad;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0;
    height: 200px;
  }
`;

const TagSetting = styled.div`
  padding: 50px 0;
  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

const SubExplain = styled.span`
  font-size: 12px;
  color: #adadad;
  margin-left: 10px;
  display: inline-block;
`;

const Suggestion = styled.div`
  font-weight: 400;
  color: #a6a6a6;
  font-size: 12px;
  line-height: 1.8;
  margin: 15px 0;
`;

const TagLabel = styled.label`
  position: relative;
  &::after {
    position: absolute;
    content: '#';
    display: block;
    top: 3px;
    left: 8px;
  }
`;

const InputTags = styled.input`
  width: 180px;
  padding: 10px 20px;
  border: 1px solid #adadad;
  font-size: 14px;
  color: #000;
  outline: none;
  &::placeholder {
    color: #adadad;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const PushedTag = styled.div`
  padding: 5px 25px 6px 10px;
  background: ${COLORS.MAIN};
  color: #fff;
  font-weight: 400;
  border-radius: 7px;
  font-size: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: default;
`;

const DeleteTagBtn = styled.div`
  position: absolute;
  top: 7px;
  right: 8px;
  width: 12px;
  height: 12px;
  background: url('/img/close.png') no-repeat center center;
  background-size: cover;
  cursor: pointer;
`;

const ContactInput = styled.input`
  appearance: none;
  border: 1px solid #adadad;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 29%;
    display: none;
  }
  &:checked {
    background: ${COLORS.MAIN};
    border: 1px solid ${COLORS.MAIN};
    &::after {
      display: block;
      border: 2px solid #fff;
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
      transform-origin: 108% 8%;
    }
  }

  &:hover {
    box-shadow: 0 0 5px rgba(4, 150, 105, 0.8);
    border: none;
  }
`;

const ContactLabel = styled.label`
  margin-right: 40px;
  cursor: pointer;
  font-size: 13px;
  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

const AddressContainer = styled.div`
  margin: 30px 0;
  font-size: 13px;
  font-weight: 400;
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const AddressInput = styled.input`
  border: 1px solid #adadad;
  padding: 8px 10px;
  outline: none;
  font-size: 12px;
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

const ImageContainer = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #d9d9d9;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const CategoryContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 25px 0;
    border-bottom: 1px solid #d9d9d9;
  }
`;

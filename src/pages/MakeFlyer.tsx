import styled from '@emotion/styled';

import AttachImage from '../components/MakeFlyer/AttachImage';
import { CategoryItem } from '../constants/categorys';
import { COLORS } from '../constants/colors';
import useMakeFlyer from '../hooks/useMakeFlyer';

const MakeFlyer = () => {
  const {
    backPage,
    handleChangeRadio,
    handleChangeTitle,
    handleChangeMainText,
    handleTag,
    handleKeyDown,
    handleDeleteTag,
    handleContact,
    handleSubmit,
    handleAddress,
    suggestTags,
    isChatOn,
    isEmailOn,
    tagList,
    tag,
  } = useMakeFlyer();

  return (
    <Container>
      <Category>
        <BackArrow onClick={backPage} />

        <div style={{ margin: '60px 0', fontWeight: '600' }}>카테고리 설정</div>

        <CategoryForm onChange={handleChangeRadio}>
          {CategoryItem.map(({ name, id }) => (
            <div key={name} style={{ display: 'flex' }}>
              <CategoryInput id={name} type='radio' name='item' value={id} />
              <CategoryLabel htmlFor={name}>{name}</CategoryLabel>
            </div>
          ))}
        </CategoryForm>
      </Category>

      <FlyerForm>
        <TitleNButtons>
          <FormTitle>전단지 만들기</FormTitle>
          <div>
            <SaveBtn type='button'>임시 저장</SaveBtn>
            <PostBtn type='button' onClick={handleSubmit}>
              전단지 붙이기
            </PostBtn>
          </div>
        </TitleNButtons>

        <SetTitle
          type='text'
          placeholder='제목'
          name='title'
          onChange={handleChangeTitle}
        />

        <AttachImage />

        <SetTextArea
          placeholder='본문을 입력해주세요.'
          name='content'
          onChange={handleChangeMainText}
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

        <div>
          <form onChange={handleContact}>
            <div style={{ fontWeight: '400', marginBottom: '25px' }}>
              연락 수단 설정<SubExplain>중복 선택 가능</SubExplain>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ContactInput
                id='comment'
                type='checkbox'
                name='contact'
                value='comment'
              />
              <ContactLabel htmlFor='comment'>댓글</ContactLabel>

              <ContactInput
                id='chatting'
                type='checkbox'
                name='contact'
                value='chatting'
              />
              <ContactLabel htmlFor='chatting'>카카오톡 오픈채팅</ContactLabel>

              <ContactInput
                id='email'
                type='checkbox'
                name='contact'
                value='email'
              />
              <ContactLabel htmlFor='email'>이메일</ContactLabel>
            </div>
            {isChatOn && (
              <AddressContainer>
                오픈채팅 주소 입력{' '}
                <AddressInput
                  placeholder='https://open.kakao.com/...'
                  name='chatting'
                  onChange={handleAddress}
                />
              </AddressContainer>
            )}
            {isEmailOn && (
              <AddressContainer>
                이메일 주소 입력{' '}
                <AddressInput
                  placeholder='example@example.com'
                  name='email'
                  onChange={handleAddress}
                />
              </AddressContainer>
            )}
          </form>
        </div>
      </FlyerForm>
    </Container>
  );
};

export default MakeFlyer;

const Container = styled.div`
  display: flex;
`;

const Category = styled.div`
  width: 300px;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 50px;
`;

const BackArrow = styled.div`
  width: 30px;
  height: 30px;
  background: url('/img/back.png') no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;

const CategoryForm = styled.form`
  gap: 20px;
`;
const CategoryInput = styled.input`
  appearance: none;
  border: 1px solid #adadad;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 20px;
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
      transform-origin: 100% 10%;
    }
  }

  &:hover {
    box-shadow: 0 0 5px rgba(4, 150, 105, 0.8);
    border: none;
  }
`;
const CategoryLabel = styled.label`
  cursor: pointer;
  margin-bottom: 35px;
`;

const FlyerForm = styled.div`
  padding: 50px;
  width: 100%;
`;

const TitleNButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  border-bottom: 1px solid #d9d9d9;
`;

const FormTitle = styled.div`
  font-size: 23px;
  font-weight: 600;
`;

const SaveBtn = styled.button`
  border: 1px solid ${COLORS.MAIN};
  background: #fff;
  color: #000;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
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
`;

const TagSetting = styled.div`
  padding: 50px 0;
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
`;
const AddressContainer = styled.div`
  margin: 30px 0;
  font-size: 13px;
  font-weight: 400;
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddressInput = styled.input`
  border: 1px solid #adadad;
  padding: 8px 10px;
  outline: none;
  font-size: 12px;
  width: 300px;
`;

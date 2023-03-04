export type CategoryName =
  | '전체'
  | '고민'
  | '물건'
  | '학습'
  | '육아'
  | '찾아요'
  | '자랑'
  | '건강'
  | '홍보';

interface Categorys {
  id: string;
  name: CategoryName;
  tag?: string;
}

export const CategoryItem: Categorys[] = [
  {
    id: 'worry',
    name: '고민',
    tag: '#진로 #취업 #학교 #직장 #외모 #성격 #친구 #가족 #연애 #부부 #기타',
  },
  {
    id: 'item',
    name: '물건',
    tag: '#운동화 #의류 #가방 #전자기기 #생활가전 #가구/인테리어 #반려동물용품 #문구 #운동기구',
  },
  {
    id: 'study',
    name: '학습',
    tag: '#초등학생 #중학생 #고등학생 #N수생 #대학생 #학원숙제 #과제',
  },
  {
    id: 'parenting',
    name: '육아',
    tag: '#임산부 #신생아 #영유아 #유치원생 #초등학생 #중학생 #고등학생',
  },
  {
    id: 'find',
    name: '찾아요',
    tag: '#장소 #물건 #음악 #넷플릭스 #강아지 #고양이 #반려동물 #사람 #ㅇㅇ분실',
  },
  {
    id: 'boast',
    name: '자랑',
    tag: '#반려동물 #사진 #성적 #쇼핑 #여행 #음식 #남자친구/여자친구 #flex',
  },
  {
    id: 'medical',
    name: '건강',
    tag: '#헌혈증 #기증 #병원정보 #건강상담',
  },
  {
    id: 'promotion',
    name: '홍보',
    tag: '#음식점오픈 #학원홍보 #쇼핑몰홍보',
  },
];

export const StreetCategory: Categorys[] = [
  { id: 'total', name: '전체' },
  ...CategoryItem,
];

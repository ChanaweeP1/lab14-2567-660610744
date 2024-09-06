export interface TermsAndConditionsProps {
  opened: boolean;
  close: () => void;
}

export interface CommentProps {
  name: string;
  rating: number;
  review: string;
}

export interface Footerprops {
  year: string;
  name: string;
  studentId: string;
}
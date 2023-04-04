export interface TransactionProps {
  id: number;
  title: string;
  subTitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
}

export interface TransactionSectionProps {
  data: Array<TransactionProps>;
}

export interface TransactionAviProps {
  icon: any;
  background: string;
}
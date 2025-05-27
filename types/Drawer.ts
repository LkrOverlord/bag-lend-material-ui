export type StepConfig = {
  header: {
    title: string;
    titlePosition: 'left' | 'right';
    backButton?: boolean;
    closeButton?: boolean;
  };
  body: React.ReactNode;
  footer?: {
    submitButton?: {
      text: string;
      onClick: () => void | Promise<void>;
    };
  };
};
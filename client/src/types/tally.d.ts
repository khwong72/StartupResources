declare interface Window {
  Tally: {
    loadEmbeds: () => void;
    openPopup: (formId: string, options?: any) => void;
    closePopup: (formId: string) => void;
  };
}

interface SubmissionPayload {
  id: string;
  respondentId: string;
  formId: string;
  formName: string;
  createdAt: Date;
  fields: Array<{
    id: string;
    title: string;
    type: string;
    answer: { value: any; raw: any };
  }>;
} 
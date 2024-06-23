import moment from 'moment';
import React, { ReactNode, createContext, useContext, useState } from 'react';

export interface Period {
  startDate: string;
  endDate: string;
}

interface CalendarFilterContextType {
  openFloating: boolean;
  setOpenFloating: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
  isPeriod: boolean;
  setIsPeriod: React.Dispatch<React.SetStateAction<boolean>>;
  period: Period;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

const CalendarFilterContext = createContext<CalendarFilterContextType | undefined>(undefined);

export const useCalendarFilter = (): CalendarFilterContextType => {
  const context = useContext(CalendarFilterContext);
  if (!context) {
    throw new Error('useCalendarFilter must be used within a CalendarFilterProvider');
  }
  return context;
};

interface CalendarFilterProviderProps {
  children: ReactNode;
}

export const CalendarFilterProvider = ({ children }: CalendarFilterProviderProps) => {
  const [openFloating, setOpenFloating] = useState(false); // 바텀시트 오픈 여부
  const [selectedIdx, setSelectedIdx] = useState(0); // 설정한 기간 idx
  const [isPeriod, setIsPeriod] = useState(false); // 기간 설정 여부
  const [period, setPeriod] = useState<Period>({ // 설정한 기간
    startDate: moment(new Date()).format('YYYY-MM-DD'),
    endDate: moment(new Date()).format('YYYY-MM-DD')
  });

  const value: CalendarFilterContextType = {
    openFloating,
    setOpenFloating,
    selectedIdx,
    setSelectedIdx,
    isPeriod,
    setIsPeriod,
    period,
    setPeriod
  };

  return (
    <CalendarFilterContext.Provider value={value}>
      {children}
    </CalendarFilterContext.Provider>
  );
};

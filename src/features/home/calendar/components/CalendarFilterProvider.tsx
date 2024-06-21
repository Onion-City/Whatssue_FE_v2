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
  const [openFloating, setOpenFloating] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPeriod, setIsPeriod] = useState(false);
  const [period, setPeriod] = useState<Period>({
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

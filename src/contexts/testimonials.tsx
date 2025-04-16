import React, { createContext, useContext, useState } from "react";

interface TestimonialsContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number | ((prev: number) => number)) => void;
}

const TestimonialsContext = createContext<TestimonialsContextType | undefined>(
  undefined
);

export const TestimonialsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <TestimonialsContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
      }}
    >
      {children}
    </TestimonialsContext.Provider>
  );
};

export const useTestimonials = () => {
  const context = useContext(TestimonialsContext);
  if (context === undefined) {
    throw new Error(
      "useTestimonials must be used within a TestimonialsProvider"
    );
  }
  return context;
};

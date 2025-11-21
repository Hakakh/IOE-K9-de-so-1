import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import { AudioPlayer } from './AudioPlayer';
import { Button } from './Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  isAnswered: boolean;
  userAnswer: string | null;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, isAnswered, userAnswer }) => {
  const [inputVal, setInputVal] = useState('');
  const [selectedParts, setSelectedParts] = useState<string[]>([]);

  useEffect(() => {
    setInputVal('');
    setSelectedParts([]);
  }, [question.id]);

  const handleMCSelect = (option: string) => {
    if (!isAnswered) {
      onAnswer(option);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAnswered && inputVal.trim()) {
      onAnswer(inputVal.trim());
    }
  };

  const handlePartClick = (part: string) => {
    if (isAnswered) return;
    
    if (selectedParts.includes(part)) {
      setSelectedParts(prev => prev.filter(p => p !== part));
    } else {
      setSelectedParts(prev => [...prev, part]);
    }
  };

  const handleRearrangeSubmit = () => {
    if (!isAnswered && selectedParts.length > 0) {
      onAnswer(selectedParts.join(' '));
    }
  };

  const isCorrect = () => {
    if (!userAnswer) return false;
    if (question.type === QuestionType.REARRANGE) {
        return userAnswer.replace(/\s+/g, ' ').trim() === question.correctAnswer.replace(/\s+/g, ' ').trim();
    }
    return userAnswer.toLowerCase() === question.correctAnswer.toLowerCase();
  };

  const renderMedia = () => (
    <div className="mb-6 space-y-4">
      {question.imageUrl && (
        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 flex justify-center p-2">
            <img 
                src={question.imageUrl} 
                alt="Quiz Context" 
                className="max-h-72 w-auto object-contain rounded-lg" 
                onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                }}
            />
        </div>
      )}
      {question.audioUrl && (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <AudioPlayer src={question.audioUrl.replace(' ', '')} /> 
        </div>
      )}
    </div>
  );

  const renderQuestionContent = () => {
    switch (question.type) {
      case QuestionType.MULTIPLE_CHOICE:
        return (
          <div className="grid grid-cols-1 gap-3 mt-4">
            {question.options?.map((option, idx) => {
              let btnClass = "bg-white border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:shadow-md";
              if (isAnswered) {
                if (option === question.correctAnswer) btnClass = "bg-green-100 border-green-500 text-green-800 font-bold shadow-sm";
                else if (option === userAnswer && userAnswer !== question.correctAnswer) btnClass = "bg-red-100 border-red-500 text-red-800 shadow-sm";
                else btnClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
              } else if (userAnswer === option) {
                btnClass = "bg-blue-50 border-blue-500 text-blue-800";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleMCSelect(option)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center group ${btnClass}`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold shrink-0 transition-colors ${
                      isAnswered && option === question.correctAnswer ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-lg">{option}</span>
                </button>
              );
            })}
          </div>
        );

      case QuestionType.FILL_IN_BLANK:
        return (
          <form onSubmit={handleInputSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={isAnswered && userAnswer ? userAnswer : inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                disabled={isAnswered}
                placeholder="Type your answer here..."
                className={`flex-1 p-4 rounded-xl border-2 outline-none transition-all text-lg shadow-sm ${
                    isAnswered 
                    ? isCorrect()
                        ? 'border-green-500 bg-green-50 text-green-900 font-medium'
                        : 'border-red-500 bg-red-50 text-red-900 font-medium'
                    : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                }`}
              />
              {!isAnswered && (
                <Button type="submit" disabled={!inputVal.trim()} className="shrink-0">
                  Submit Answer
                </Button>
              )}
            </div>
          </form>
        );

      case QuestionType.REARRANGE:
        return (
          <div className="space-y-6 mt-6">
            {/* Pool of parts */}
            <div className="flex flex-wrap gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
               <span className="w-full text-xs font-bold text-slate-400 uppercase mb-1">Tap words to rearrange</span>
               {question.rearrangeParts?.map((part, idx) => {
                 const isSelected = selectedParts.includes(part);
                 return (
                   <button
                    key={idx}
                    onClick={() => handlePartClick(part)}
                    disabled={isAnswered || isSelected}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all border-b-2 active:border-b-0 active:translate-y-0.5 ${
                      isSelected 
                        ? 'opacity-0 pointer-events-none scale-90' 
                        : 'bg-white border-slate-300 hover:border-blue-400 text-slate-700 shadow-sm hover:shadow-md'
                    }`}
                   >
                     {part}
                   </button>
                 )
               })}
            </div>

            {/* Drop zone */}
            <div className={`min-h-[80px] p-5 rounded-xl border-2 border-dashed flex flex-wrap gap-2 items-center transition-colors ${
                isAnswered 
                ? isCorrect()
                    ? 'border-green-500 bg-green-50/50' 
                    : 'border-red-500 bg-red-50/50'
                : 'border-slate-300 bg-white hover:border-blue-400'
            }`}>
                {selectedParts.length === 0 && !isAnswered && (
                    <div className="w-full text-center text-slate-400 italic flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        <span>Build your sentence here...</span>
                    </div>
                )}
                {selectedParts.map((part, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => handlePartClick(part)}
                        disabled={isAnswered}
                        className="bg-blue-100 text-blue-900 px-3 py-1.5 rounded-lg border border-blue-200 font-medium shadow-sm hover:bg-red-100 hover:text-red-700 hover:border-red-200 transition-colors"
                    >
                        {part}
                    </button>
                ))}
            </div>
            
            {!isAnswered && (
                <div className="flex justify-end">
                    <Button onClick={handleRearrangeSubmit} disabled={selectedParts.length === 0}>
                        Confirm Sentence
                    </Button>
                </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-extrabold tracking-wider uppercase">
                {question.type.replace(/_/g, ' ')}
            </span>
            <span className="text-xs font-bold text-slate-300">ID: {question.id}</span>
        </div>

        <div className="p-6 sm:p-10">
          {renderMedia()}
          
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
            {question.questionText}
          </h2>

          {renderQuestionContent()}

          {/* Feedback Section */}
          {isAnswered && (
            <div className={`mt-8 p-6 rounded-xl border-l-4 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 ${
                isCorrect()
                ? 'bg-green-50 border-green-500'
                : 'bg-red-50 border-red-500'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg shadow-md ${
                     isCorrect() ? 'bg-green-500' : 'bg-red-500'
                }`}>
                    {isCorrect() ? '✓' : '✕'}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-xl mb-2 ${
                     isCorrect() ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {isCorrect() ? 'Excellent!' : 'Not quite right'}
                  </h3>
                  
                  {!isCorrect() && (
                    <div className="mb-4 bg-white/60 p-3 rounded-lg border border-red-100 inline-block">
                        <span className="text-red-600 text-sm font-bold uppercase mr-2">Correct Answer:</span> 
                        <span className="font-bold text-slate-800 text-lg">{question.correctAnswer}</span>
                    </div>
                  )}
                  
                  <div className="bg-white/80 p-4 rounded-lg border border-slate-100/50 text-slate-700 leading-relaxed shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold text-xs uppercase text-blue-500">Explanation</span>
                    </div>
                    {question.explanation}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

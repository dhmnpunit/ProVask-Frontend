
import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

function CourseCreationForm() {
  const [courseData, setCourseData] = useState({
    courseName: '',
    courseDescription: '',
    levels: [
      {
        name: 'foundation',
        modules: [{ title: '', content: '', type: 'text' }],
        quiz: {
          questions: [
            {
              question: '',
              options: ['', '', '', ''],
              correctAnswer: 0
            }
          ]
        }
      }
    ]
  });

  // Handle basic input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle module changes
  const handleModuleChange = (levelIndex, moduleIndex, field, value) => {
    const newLevels = [...courseData.levels];
    newLevels[levelIndex].modules[moduleIndex][field] = value;
    setCourseData(prev => ({
      ...prev,
      levels: newLevels
    }));
  };

  // Delete a module
  const deleteModule = (levelIndex, moduleIndex) => {
    const newLevels = [...courseData.levels];
    // Prevent deleting the last module
    if (newLevels[levelIndex].modules.length > 1) {
      newLevels[levelIndex].modules.splice(moduleIndex, 1);
      setCourseData(prev => ({
        ...prev,
        levels: newLevels
      }));
    } else {
      alert("You must have at least one module in a level.");
    }
  };

  // Handle quiz changes
  const handleQuizChange = (levelIndex, questionIndex, field, value, optionIndex = null) => {
    const newLevels = [...courseData.levels];
    if (optionIndex !== null) {
      newLevels[levelIndex].quiz.questions[questionIndex].options[optionIndex] = value;
    } else {
      newLevels[levelIndex].quiz.questions[questionIndex][field] = value;
    }
    setCourseData(prev => ({
      ...prev,
      levels: newLevels
    }));
  };

  // Delete a quiz question
  const deleteQuizQuestion = (levelIndex, questionIndex) => {
    const newLevels = [...courseData.levels];
    // Prevent deleting the last question
    if (newLevels[levelIndex].quiz.questions.length > 1) {
      newLevels[levelIndex].quiz.questions.splice(questionIndex, 1);
      setCourseData(prev => ({
        ...prev,
        levels: newLevels
      }));
    } else {
      alert("You must have at least one question in a quiz.");
    }
  };

  // Delete a level
  const deleteLevel = (levelIndex) => {
    const newLevels = [...courseData.levels];
    // Prevent deleting the last level
    if (newLevels.length > 1) {
      newLevels.splice(levelIndex, 1);
      setCourseData(prev => ({
        ...prev,
        levels: newLevels
      }));
    } else {
      alert("You must have at least one level.");
    }
  };

  // Add new level
  const addLevel = () => {
    setCourseData(prev => ({
      ...prev,
      levels: [...prev.levels, {
        name: '',
        modules: [{ title: '', content: '', type: 'text' }],
        quiz: {
          questions: [
            {
              question: '',
              options: ['', '', '', ''],
              correctAnswer: 0
            }
          ]
        }
      }]
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    // Basic validation
    if (!courseData.courseName.trim()) {
      alert('Please enter a course name');
      return false;
    }

    if (!courseData.courseDescription.trim()) {
      alert('Please enter a course description');
      return false;
    }

    // Validate levels
    for (let i = 0; i < courseData.levels.length; i++) {
      const level = courseData.levels[i];
      
      if (!level.name) {
        alert(`Please select a name for level ${i + 1}`);
        return false;
      }

      // Validate modules
      for (let j = 0; j < level.modules.length; j++) {
        const module = level.modules[j];
        
        if (!module.title.trim()) {
          alert(`Please enter a title for module ${j + 1} in level ${i + 1}`);
          return false;
        }

        if (module.type === 'text' && !module.content.trim()) {
          alert(`Please enter content for module ${j + 1} in level ${i + 1}`);
          return false;
        }
      }

      // Validate quiz questions
      for (let k = 0; k < level.quiz.questions.length; k++) {
        const question = level.quiz.questions[k];
        
        if (!question.question.trim()) {
          alert(`Please enter a question for question ${k + 1} in level ${i + 1}'s quiz`);
          return false;
        }

        if (question.options.some(opt => !opt.trim())) {
          alert(`Please fill in all options for question ${k + 1} in level ${i + 1}'s quiz`);
          return false;
        }
      }
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form before submission
    const isValid = validateForm();
    
    if (isValid) {
      try {
        // Log the entire course data to the console
        console.log('Full Course Data:', JSON.stringify(courseData, null, 2));
        
        // Simulated submission (remove or replace with actual API call)
        alert('Course created successfully!\nCheck console for full details.');
      } catch (error) {
        console.error('Error creating course:', error);
        alert('Failed to create course. Please try again.');
      }
    }
  };

  return (
    <div className='p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 transition duration-200 hover:shadow-lg'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Create a new course</h1>
        
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Course Basic Info */}
          <div className='space-y-4'>
            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 mb-1'>
                Course Name*
              </label>
              <input 
                type="text"
                name="courseName"
                value={courseData.courseName}
                onChange={handleChange}
                placeholder='Enter Course Name'
                className='p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 mb-1'>
                Course Description*
              </label>
              <textarea
                name="courseDescription"
                value={courseData.courseDescription}
                onChange={handleChange}
                placeholder='Enter Course Description'
                rows="4"
                className='p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200'
                required
              />
            </div>
          </div>

          {/* Levels Section */}
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold text-gray-800'>Levels</h2>
            
            {courseData.levels.map((level, levelIndex) => (
              <div key={levelIndex} className='border rounded-lg p-4 space-y-4 relative'>
                {/* Delete Level Button */}
                {courseData.levels.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteLevel(levelIndex)}
                    className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                    title='Delete Level'
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}

                <div className='flex flex-col'>
                  <label className='text-sm font-medium text-gray-700 mb-1'>
                    Level Name*
                  </label>
                  <select
                    value={level.name}
                    onChange={(e) => {
                      const newLevels = [...courseData.levels];
                      newLevels[levelIndex].name = e.target.value;
                      setCourseData(prev => ({ ...prev, levels: newLevels }));
                    }}
                    className='p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200'
                    required
                  >
                    <option value="foundation">Foundation</option>
                    <option value="explorer">Explorer</option>
                    <option value="practitioner">Practitioner</option>
                    <option value="analyst">Analyst</option>
                    <option value="expert">Expert</option>
                    <option value="innovator">Innovator</option>
                  </select>
                </div>

                {/* Modules Section */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-medium text-gray-800'>Modules</h3>
                  {level.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className='border rounded p-3 space-y-2 relative'>
                      {/* Delete Module Button */}
                      {level.modules.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deleteModule(levelIndex, moduleIndex)}
                          className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                          title='Delete Module'
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                      <input
                        type="text"
                        value={module.title}
                        onChange={(e) => handleModuleChange(levelIndex, moduleIndex, 'title', e.target.value)}
                        placeholder='Module Title'
                        className='w-full p-2 border border-gray-300 rounded-md'
                        required
                      />
                      <select
                        value={module.type}
                        onChange={(e) => handleModuleChange(levelIndex, moduleIndex, 'type', e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded-md mt-2'
                      >
                        <option value="text">Text Content</option>
                        <option value="file">File Upload</option>
                        <option value="link">External Link</option>
                      </select>
                      {module.type === 'text' && (
                        <textarea
                          value={module.content}
                          onChange={(e) => handleModuleChange(levelIndex, moduleIndex, 'content', e.target.value)}
                          placeholder='Module Content'
                          rows="3"
                          className='w-full p-2 border border-gray-300 rounded-md'
                        />
                      )}
                      {module.type === 'file' && (
                        <input
                          type="file"
                          onChange={(e) => handleModuleChange(levelIndex, moduleIndex, 'content', e.target.files[0])}
                          className='w-full p-2 border border-gray-300 rounded-md'
                        />
                      )}
                      {module.type === 'link' && (
                        <input
                          type="url"
                          value={module.content}
                          onChange={(e) => handleModuleChange(levelIndex, moduleIndex, 'content', e.target.value)}
                          placeholder='Enter URL'
                          className='w-full p-2 border border-gray-300 rounded-md'
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newLevels = [...courseData.levels];
                      newLevels[levelIndex].modules.push({ title: '', content: '', type: 'text' });
                      setCourseData(prev => ({ ...prev, levels: newLevels }));
                    }}
                    className='w-full p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-200'
                  >
                    <Plus className="h-4 w-4 inline mr-2" />
                    Add Module
                  </button>
                </div>

                {/* Quiz Section */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-medium text-gray-800'>Quiz</h3>
                  {level.quiz.questions.map((question, qIndex) => (
                    <div key={qIndex} className='border rounded p-3 space-y-2 relative'>
                      {/* Delete Question Button */}
                      {level.quiz.questions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deleteQuizQuestion(levelIndex, qIndex)}
                          className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                          title='Delete Question'
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                      <input
                        type="text"
                        value={question.question}
                        onChange={(e) => handleQuizChange(levelIndex, qIndex, 'question', e.target.value)}
                        placeholder='Question'
                        className='w-full p-2 border border-gray-300 rounded-md'
                        required
                      />
                      {question.options.map((option, oIndex) => (
                        <div key={oIndex} className='flex items-center space-x-2'>
                          <input
                            type="radio"
                            name={`correct-${levelIndex}-${qIndex}`}
                            checked={question.correctAnswer === oIndex}
                            onChange={() => handleQuizChange(levelIndex, qIndex, 'correctAnswer', oIndex)}
                          />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleQuizChange(levelIndex, qIndex, 'options', e.target.value, oIndex)}
                            placeholder={`Option ${oIndex + 1}`}
                            className='flex-1 p-2 border border-gray-300 rounded-md'
                            required
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newLevels = [...courseData.levels];
                      newLevels[levelIndex].quiz.questions.push({
                        question: '',
                        options: ['', '', '', ''],
                        correctAnswer: 0
                      });
                      setCourseData(prev => ({ ...prev, levels: newLevels }));
                    }}
                    className='w-full p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-200'
                  >
                    <Plus className="h-4 w-4 inline mr-2" />
                    Add Question
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addLevel}
              className='w-full p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-200'
            >
              <Plus className="h-4 w-4 inline mr-2" />
              Add Level
            </button>
          </div>

          <button
            type="submit"
            className="bg-accent px-4 py-2 w-full rounded-xl text-white hover:bg-green-800 transition duration-200"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default CourseCreationForm;



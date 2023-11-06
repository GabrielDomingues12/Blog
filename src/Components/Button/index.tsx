const Index: React.FC<{ children: string }> = ({ children }) => {
    return (
      <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce ml-32">{children}</button>
    );
  }
  
  export default Index;
  
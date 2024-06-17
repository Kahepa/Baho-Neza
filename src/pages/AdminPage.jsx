// import Overview from '../components/Overview';
import UserActions from '../components/UserActions';
import VisitorInsights from '../components/VisitorInsights';
import StudyTypeChart from '../components/StudyTypeChart';

const Adminpage = () => {
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Overall activities</h1>
          {/* <Overview /> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <UserActions />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <VisitorInsights />
            <StudyTypeChart />
          </div>
        </div>
      );
};

export default Adminpage;

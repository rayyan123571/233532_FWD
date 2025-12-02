import { useEffect, useState } from 'react';
import { projectAPI } from './projectAPI';
import ProjectDetail from './ProjectDetail';
import { useParams } from 'react-router';
import { MOCK_PROJECTS } from './MockProjects';

function ProjectPage() {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    projectAPI
      .find(id)
      .then((data) => {
        if (mounted) {
          setProject(data);
          setError(null);
          setLoading(false);
        }
      })
      .catch((e) => {
        // Fallback to mock data if API fails
        const mockProject = MOCK_PROJECTS.find(p => p.id === id);
        if (mockProject) {
          console.log('API unavailable, using mock data for project', id);
          setProject(mockProject);
          setError('Loading demo data. Connecting to backend...');
        } else {
          setError(e.message || 'Error loading project');
        }
        if (mounted) {
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, [id]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        <div className="row">
          {error && (
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          )}
        </div>

        {project && <ProjectDetail project={project} />}
      </>
    </div>
  );
}

export default ProjectPage;

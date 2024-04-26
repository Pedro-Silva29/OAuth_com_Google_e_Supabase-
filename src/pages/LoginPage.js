 import { createClient} from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://nbabichutvzptjaozrkl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYWJpY2h1dHZ6cHRqYW96cmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxODYwMDQsImV4cCI6MjAyNzc2MjAwNH0.O6-ogr3wfgwJ_rJXt27O9fYPD95ISLmUsrPgRDNUtzM"
);

function Login() {
    const navigate = useNavigate();

        supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            // forward to sucess URL
            navigate("/");
        } else {
            // forward to localhost:3000
            navigate("/sucess");
        }
    });

    return (
      <div className="App">
        <header className="App-header">
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="Blue"
                providers={["google"]}
            />
        </header>
      </div>
    );
  }
  
  export default Login;
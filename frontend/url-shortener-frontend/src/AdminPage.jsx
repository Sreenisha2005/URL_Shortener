import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {

    const [links, setLinks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

    const fetchLinks = async (pageNumber = 1, size = pageSize) => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate('/admin/login');
            return;
        }

        try {
            const response = await axios.get(
                `${API_URL}/auth/admin/links`,
                {
                    params: { page: pageNumber - 1, size },
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            setLinks(response.data.content);
            setTotalPages(response.data.totalPages);
            setPage(response.data.number + 1);

        } catch (err) {
            if (err.response?.status === 403) {
                console.log("Token expired or unauthorized, redirecting to login...");
                localStorage.removeItem('token');
                navigate('/admin/login');
            } else {
                console.error("Error fetching links:", err);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/admin/login");
            return;
        }

        fetchLinks(1, pageSize);
    }, [pageSize]);

    return (
        <div className="admin-container">
            <h2>Admin Page - URL Links</h2>

            <div className="pagination-controls">
                <label>Page Size: </label>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>

            <table className="links-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Shortcode</th>
                        <th>Long URL</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map(link => (
                        <tr key={link.id}>
                            <td>{link.id}</td>
                            <td>{link.shortcode}</td>
                            <td>{link.longurl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination-buttons">
                <button disabled={page === 1} onClick={() => fetchLinks(page - 1)}>Previous</button>
                <span> Page <b>{page}</b> of <b>{totalPages}</b> </span>
                <button disabled={page === totalPages} onClick={() => fetchLinks(page + 1)}>Next</button>
            </div>
        </div>
    );
}

export default AdminPage;

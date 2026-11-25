
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 5 },
        { duration: '30s', target: 30 },
        { duration: '30s', target: 100 },
        { duration: '30s', target: 0 },
    ],

    thresholds: {
        http_req_duration: ['p(95)<156'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    const res = http.get('http://127.0.0.1:8000');

    check(res, {
        'status 200 байна': (r) => r.status === 200,
    });

    sleep(1);
}

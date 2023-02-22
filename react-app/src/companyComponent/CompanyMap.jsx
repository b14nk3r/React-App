import React from 'react'
import KaKaoMap from '../kakaoMap/KakaoMap'

const CompanyMap = () => {
    return (
        <div>
            <div class="row relative container2">
                <div class="col-md-12">
                    <p class="sub_title">찾아오시는 길</p>
                </div>
                <KaKaoMap />
                <table className="company-table tb">
                    <tbody>
                        <tr class="tr-bt">
                            <th className='text-center b1'>주소</th>
                            <td>(12939) 경기도 하남시 미사강변중앙로11(두산더프론트미사) 523호</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="tr-bt">
                            <th className='text-center b1'>Tel</th>
                            <td>031-796-9390</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="tr-bt">
                            <th className='b1'>Fax</th>
                            <td>031-796-9391</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompanyMap
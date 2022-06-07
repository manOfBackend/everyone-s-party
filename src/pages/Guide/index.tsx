/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/alt-text */
import DropDownBox from '@src/components/molecules/DropDownBox';
import RowDivider from '@src/components/atoms/RowDivider';
import IconRocket from '@src/assets/resource/Rocket.png';
import IconClock from '@src/assets/resource/clock.png';
import IconMail from '@src/assets/resource/mail.png';
import IconMoney from '@src/assets/resource/money.png';
import IconLock from '@src/assets/resource/lock.png';
import IconHandshake from '@src/assets/resource/handShake.png';
import IMGCompany from '@src/assets/resource/company.png';

/* eslint-disable react/react-in-jsx-scope */
const Guide = () => (
  <div>
    <div className="mt-10 text-xl font-bold">피클플러스 가이드</div>
    <div className="mb-4 text-gray-700">
      피클플러스는 &quot;계정 공유 요금제&quot;로 인해 생기는
      <br />
      고객들의 불편함을 해소하고,
      <br />
      기존에 보호받을 수 없었던 고객들의 돈을
      <br />
      안전하게 보호해 주고자 합니다
    </div>
    <RowDivider height="8px" className="bg-gray-200" />
    <DropDownBox
      header={
        <div className="text-left">
          빠른매칭은 파티장과 파티원을
          <br />
          <div className="font-bold">자동으로 매칭해줘요</div>
        </div>
      }
      icon={IconRocket}
      downBody={
        <ul className="list-disc ml-4">
          <li>
            <span className="font-bold">파티장</span>
            으로 시작한다면, 구독하는 서비스의 계정을 피클플러스에 등록하세요.
          </li>
          <li className="mt-4">
            <span className="font-bold">파티원</span>
            으로 시작한다면, &quot;빠른 매칭 시작하기&quot;버튼을 누르기만 하면 끝!
          </li>
        </ul>
      }
    />
    <DropDownBox
      header={
        <div className="text-left">
          귀찮은 송금 없이
          <span className="font-bold ml-0.5">자동으로 정산해줘요</span>
        </div>
      }
      icon={IconClock}
      downBody={
        <ul className="list-disc ml-4">
          <li>
            <div>
              <span className="font-bold">파티원</span>
              <span>은 매 달 귀찮게 송금하지 않아도 돼요.</span>
            </div>
            피클플러스에 등록된 카드를 통해 요금이 매 달 자동 결재됩니다.
          </li>
          <li className="mt-4">
            <span className="font-bold">파티장</span>
            <span>
              은 매 달 귀찮게 송금해달라고 하지 않아도 돼요. 피클플러스가 등록된 계좌로 매 달 자동
              정산된 금액을 보내줍니다.
            </span>
          </li>
        </ul>
      }
    />
    <DropDownBox
      header={
        <div className="text-left">
          안전하고 편리하게
          <br />
          <div className="flex">
            <div className="font-bold">ID/비밀번호를 공유</div>
            <span>할 수 있어요</span>
          </div>
        </div>
      }
      icon={IconMail}
      downBody={
        <ul className="list-disc ml-4">
          <li>
            <span className="font-bold">파티원</span>
            <span> 은 파티에 가입하는 즉시 ID와 비밀번호를 알 수 있어요</span>
          </li>
          <li className="mt-4">
            <span className="font-bold">파티장</span>
            <span>
              은 중간에 ID나 비밀번호를 변경하는 일이 있더라도 말하지 않아도 돼요. 바뀐 계정정보를
              MY파티에서 간단하게 변경할 수 있어요.
            </span>
          </li>
        </ul>
      }
    />
    <DropDownBox
      header={
        <div className="text-left">
          <span className="font-bold">중간에 이탈해도</span>
          <br />
          안전하게 정산 받을 수 있어요.
        </div>
      }
      icon={IconMoney}
      downBody={
        <ul className="list-disc ml-4">
          <li>
            <span className="font-bold">파티원</span>
            <span>
              은 중간에 파티를 이탈하면 미리 카드로 결제했던 한달치 요금에서 남은 날짜만큼 요금이
              자동으로 부분취소 돼요.
            </span>
          </li>
          <li className="mt-4">
            <div>
              <span className="font-bold">파티장</span>
              <span>도 걱정하지 마세요!</span>
            </div>
            <span>
              중간에 파티원이 파티를 나가도 자동으로 파티원을 매칭해줘요. 금전적 손해를 보지않아요.
            </span>
          </li>
        </ul>
      }
    />
    <DropDownBox
      header={
        <div className="text-left">
          <span className="font-bold">뛰어난 보안</span>
          의 KB국민은행
          <br />
          에스크와 함께합니다.
        </div>
      }
      icon={IconLock}
      downBody={
        <ul className="list-disc ml-4">
          <li>피클플러스는 뛰어난 보안의 KB 국민은행 에스크로와 함께합니다.</li>
          <li className="mt-4">안전한 게정 공유 생활, 피클플러스로 함께 시작해요.</li>
        </ul>
      }
    />
    <DropDownBox
      header={
        <div className="text-left">
          훌륭한 파트너들과
          <br />
          <span className="font-bold">투자,제휴,지원</span>
          <span> 관계를 맺고 있어요.</span>
        </div>
      }
      icon={IconHandshake}
      downBody={
        <ul className="list-disc ml-4">
          <li>
            국내 1위 스타트업 AC Primer로부터 투자를 유치하고, &quot;WAVVE카드&quot; 프로모션 제휴,
            롯데카드 &quot;롤라카드&quot; 제휴를 진행하는 등 훌륭한 파트너들과 함께 성장하고 있어요.
          </li>
          <div className="flex justify-center">
            <img alt="company" width={261} className="rounded-lg" src={IMGCompany} />
          </div>
        </ul>
      }
    />
  </div>
);

export default Guide;

package com.ssafy.myini.member.service;

import com.ssafy.myini.member.domain.*;
import com.ssafy.myini.member.response.*;

import java.util.*;

public interface MemberService {
    String generateToken(Long userId);

    MemberInfoResponse findMember(Member member);

    List<CrewResponse> findCrewById(Member member);
}

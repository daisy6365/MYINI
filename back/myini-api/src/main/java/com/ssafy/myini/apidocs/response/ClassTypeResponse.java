package com.ssafy.myini.apidocs.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassTypeResponse {
    private Long dtoId;
    private String dtoName;
}

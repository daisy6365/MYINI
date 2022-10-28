package com.ssafy.myini.initializer.controller;

import com.ssafy.myini.config.S3Uploader;
import com.ssafy.myini.initializer.request.InitializerRequest;
import com.ssafy.myini.initializer.response.InitializerPossibleResponse;
import com.ssafy.myini.initializer.service.InitializerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;

@RequestMapping("/api/initializers")
@RestController
@RequiredArgsConstructor
public class InitializerController {
    private final InitializerService initializerService;
    private final S3Uploader s3Uploader;

    @GetMapping("/{projectid}/ispossible")
    public ResponseEntity<InitializerPossibleResponse> initializerIsPossible(@PathVariable("projectid") Long projectId){
        InitializerPossibleResponse body = initializerService.initializerIsPossible(projectId);

        return ResponseEntity.ok().body(body);
    }

    @PostMapping("/{projectid}")
    public ResponseEntity<Void> initializerStart(@PathVariable("projectid") Long projectId,
                                                 @RequestBody InitializerRequest initializerRequest){
        initializerService.initializerStart(projectId, initializerRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/downloads")
    public ResponseEntity<byte[]> myIniDownload(){
        ByteArrayOutputStream byteArrayOutputStream = s3Uploader.downloadFile("test.jpg");

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG) //.APPLICATION_OCTET_STREAM
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + "test.jpg" + "\"")
                .body(byteArrayOutputStream.toByteArray());

//        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
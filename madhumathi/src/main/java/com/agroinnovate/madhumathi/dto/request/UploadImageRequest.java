package com.agroinnovate.madhumathi.dto.request;


import io.micrometer.common.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UploadImageRequest {

    @NonNull
    private byte[] imageDate;

}